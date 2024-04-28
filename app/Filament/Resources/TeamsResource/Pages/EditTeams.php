<?php

namespace App\Filament\Resources\TeamsResource\Pages;

use App\Filament\Resources\TeamsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTeams extends EditRecord
{
    protected static string $resource = TeamsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
