<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('promossions', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->dateTime('date_debut')->nullable();
            $table->dateTime('date_fin');
            $table->decimal('pourcentage_reduction', 5, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promossions');
    }
};
