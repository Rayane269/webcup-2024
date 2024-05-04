<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DetailsCommandeResource\Pages;
use App\Filament\Resources\DetailsCommandeResource\RelationManagers;
use App\Models\DetailsCommande;
use Filament\Forms;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Forms\Components\TextInput;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DetailsCommandeResource extends Resource
{
    protected static ?string $model = DetailsCommande::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                TextInput::make('order_id')
                ->minLength(2)
                ->maxLength(50)
                ->required()
                ->unique(),
                TextInput::make('product_id')
                ->minLength(2)
                ->maxLength(50)
                ->required()
                ->unique(),
                TextInput::make('quantite')
                ->numeric()
                ->required()
                ,
                TextInput::make('prix_unitaire')
                ->numeric()
                ->inputMode('decimal')
                ->required()
               ,

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user_id')
                    ->searchable(),
                TextColumn::make('product_id')
                    ->searchable(),
                TextColumn::make('quantite')
                    ->searchable(),
                TextColumn::make('prix_unitaire')
                    ->searchable(),
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
            'index' => Pages\ListDetailsCommandes::route('/'),
            'create' => Pages\CreateDetailsCommande::route('/create'),
            'edit' => Pages\EditDetailsCommande::route('/{record}/edit'),
        ];
    }
}
