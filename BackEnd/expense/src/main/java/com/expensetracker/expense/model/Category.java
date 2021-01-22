package com.expensetracker.expense.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Data
@Table(name = "category")
public class Category {

    @Id
    private Long id;

    @NonNull
    private String name;

/*    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;*/
}
