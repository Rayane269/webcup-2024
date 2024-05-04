<?php

namespace App\Filament\Resources\PromossionsResource\Pages;

use App\Filament\Resources\PromossionsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPromossions extends EditRecord
{
    protected static string $resource = PromossionsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
