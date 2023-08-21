<?php

namespace App\Controller\Admin;

use App\Entity\Catalogue;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

#[IsGranted('ROLE_ADMIN')]
class CatalogueCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Catalogue::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud

            ->setEntityLabelInPlural('Articles')
            ->setEntityLabelInSingular('Article')

            ->setPageTitle('index', 'VazyGood - Gestion du catalogue');
    }



    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('title'),
            SlugField::new('slug')->setTargetFieldName('title'),
            BooleanField::new('online'),
            IntegerField::new('points'),
            TextField::new('imageFile')->setFormType(VichImageType::class)->hideOnIndex()->hideOnForm(),
            ImageField::new('image')
                ->setBasePath('images/products')
                ->setUploadDir('public/images/products'),
            DateTimeField::new('created_at'),

        ];
    }
}
