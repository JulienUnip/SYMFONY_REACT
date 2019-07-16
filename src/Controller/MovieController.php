<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Form\MovieType;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/movie")
 */
class MovieController extends AbstractController
{
    /**
     * @Route("/",  methods={"GET"})
     */
    public function index(MovieRepository $movieRepository): Response
    {        
        $movies = $movieRepository->findAll();
        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers, $encoders);
        $movieSerialized = $serializer->serialize($movies, 'json');

        return new Response($movieSerialized);

    }

    /**
     * @Route("/new", methods={"POST"})
     */
    public function new(Request $request): Response
    {

        $title = $request->get("title");
        $description = $request->get('description');

        if ( !empty($title) &&  !empty($description) ) {

            $movie = new Movie();
            $movie->setTitle($title);
            $movie->setDescription($description);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($movie);
            $entityManager->flush();

            return new JsonResponse(
                [
                    'status' => 'created',
                    'code' => 200
                ],
                JsonResponse::HTTP_CREATED
            );

        }
    }

    /**
     * @Route("/show/{id}", methods={"GET"})
     */
    public function show(Movie $movie): Response
    {
        
        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new Serializer($normalizers, $encoders);
        $movieSerialized = $serializer->serialize($movie, 'json');
        

        return new Response($movieSerialized);

    }

    /**
     * @Route("/edit/{id}", methods={"GET","POST"})
     */
    public function edit(Request $request, Movie $movie): Response
    {

        $title = $request->get("title");
        $description = $request->get('description');

        if ( !empty($title) &&  !empty($description) ) {
            $movie->setTitle($title);
            $movie->setDescription($description);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($movie);
            $entityManager->flush();

            return new JsonResponse(
                [
                    'status' => 'edited',
                    'code' => 200
                ],
                JsonResponse::HTTP_CREATED
            );

        }
    }

    /**
     * @Route("/{id}", methods={"DELETE"})
     */
    public function delete(Request $request, Movie $movie): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($movie);
        $entityManager->flush();

        return new JsonResponse(
            [
                'status' => 'deleted',
                'code' => 200
            ],
            JsonResponse::HTTP_CREATED
        );

    }
}
