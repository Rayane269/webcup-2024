<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AvisResource\Pages;
use Filament\Forms\Components\TextInput;
use App\Filament\Resources\AvisResource\RelationManagers;
use App\Models\Avis;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AvisResource extends Resource
{
    protected static ?string $model = Avis::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left-ellipsis';
    protected static ?string $navigationGroup = 'Users reactions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAvis::route('/'),
            'create' => Pages\CreateAvis::route('/create'),
            'edit' => Pages\EditAvis::route('/{record}/edit'),
        ];
    }
}
