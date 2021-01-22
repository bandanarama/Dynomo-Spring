package com.expensetracker.expense.controller;

import com.expensetracker.expense.model.Category;
import com.expensetracker.expense.repository.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    Collection<Category> categories(){
        return categoryRepository.findAll();
    }
/*    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable long id){

    }*/
}
