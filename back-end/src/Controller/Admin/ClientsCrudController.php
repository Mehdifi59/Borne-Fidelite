<?php

namespace App\Controller\Admin;

use App\Entity\Clients;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ClientsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Clients::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud

            ->setEntityLabelInPlural('Clients')
            ->setEntityLabelInSingular('Client')

            ->setPageTitle('index', 'VazyGood - Gestion des Clients');
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnIndex(),
            TextField::new('telephone'),
            TextField::new('nom'),
            TextField::new('prenom'),
            IntegerField::new('points'),
            DateTimeField::new('created_at')->setFormTypeOption('disabled', 'disabled'),

        ];
    }
}
