<?php

namespace App\Filament\Resources\DetailsCommandeResource\Pages;

use App\Filament\Resources\DetailsCommandeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDetailsCommande extends EditRecord
{
    protected static string $resource = DetailsCommandeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
