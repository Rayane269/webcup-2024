<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProduitResource\Pages;
use App\Filament\Resources\ProduitResource\RelationManagers;
use App\Models\Produit;
use App\Models\Category;
use Filament\Tables\Columns\CheckboxColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
// use Filament\Tables\Columns\CheckboxColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Form;
use Filament\Tables\Columns\SelectColumn;
use Filament\Resources\Resource;
use Filament\Forms\Components\TextInput;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProduitResource extends Resource
{
    protected static ?string $model = Produit::class;

    protected static ?string $navigationIcon = 'heroicon-o-circle-stack';

    protected static ?string $navigationGroup = 'Actions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('nom')
                ->minLength(2)
                ->maxLength(50)
                ->required()
                ->unique(),
                TextInput::make('description')
                ->minLength(2)
                ->maxLength(250)
                ->required(),
                TextInput::make('prix')
                ->numeric()
                ->inputMode('decimal')
                ->required(),
                Select::make('categorie')
                    ->label('categorie')
                    ->options(Category::all()->pluck('nom','id'))
                    ->searchable(),
                Toggle::make('disponibilite')
                    ->onColor('success')
                    ->offColor('danger'),
                FileUpload::make('image_url')
                ->required()
                ,
                Toggle::make('promotion')
                ->onColor('success'),
              
                TextInput::make('prix_promotionnel')
                ->numeric()
                ->inputMode('decimal'),
                
                

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('nom')
                ->searchable(),
                TextColumn::make('description')
                ->searchable(),
                TextColumn::make('prix')
                ->searchable(),
                SelectColumn::make('categorie')
                ->options(Category::all()->pluck('nom'))
                ->rules(['required'])
                ->searchable(),
                
                ToggleColumn::make('disponibilite')
                ->onColor('success')
                ,
               
                ImageColumn::make('image_url'),
                ToggleColumn::make('promotion')
                ->onColor('success')
                ,
                TextColumn::make('prix_promotionnel'),
                TextColumn::make('created_at')
                ->since()
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
            'index' => Pages\ListProduits::route('/'),
            'create' => Pages\CreateProduit::route('/create'),
            'edit' => Pages\EditProduit::route('/{record}/edit'),
        ];
    }
}
