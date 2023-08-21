<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Clients;
use App\Entity\Catalogue;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    #[IsGranted('ROLE_ADMIN')]
    public function index(): Response
    { 
         return $this->render('admin/dashboard.html.twig');
    }
    #[IsGranted('ROLE_ADMIN')]
    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('VazyGood - Administrateur')
            ->renderContentMaximized();
    }
    #[IsGranted('ROLE_ADMIN')]
    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Clients', 'fas fa-people-arrows', Clients::class);
        yield MenuItem::linkToCrud('Administrateurs', 'fas fa-user', User::class);
        yield MenuItem::linkToCrud('Catalogue', 'fas fa-cookie-bite', Catalogue::class);
    }
}
