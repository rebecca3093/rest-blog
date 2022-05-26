package com.example.restblog.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Locale;

public interface CategoriesRepository extends JpaRepository<Locale.Category, Long> {

    Locale.Category findCategoryByName(String category);
}
