<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PromossionsResource\Pages;
use App\Filament\Resources\PromossionsResource\RelationManagers;
use App\Models\Promossions;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PromossionsResource extends Resource
{
    protected static ?string $model = Promossions::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-pie';

    protected static ?string $navigationGroup = 'Actions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('product_id')
                ->numeric()
                ->unique(),
                 
                DatePicker::make('date_fin')
                ->native(false),

                TextInput::make('pourcentage_reduction')
                ->numeric()
                ->inputMode('decimal'),

              
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('product_id')
                ->searchable(),
                TextColumn::make('date_fin')
                ->searchable(),
                TextColumn::make('pourcentage_reduction')
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
            'index' => Pages\ListPromossions::route('/'),
            'create' => Pages\CreatePromossions::route('/create'),
            'edit' => Pages\EditPromossions::route('/{record}/edit'),
        ];
    }
}
