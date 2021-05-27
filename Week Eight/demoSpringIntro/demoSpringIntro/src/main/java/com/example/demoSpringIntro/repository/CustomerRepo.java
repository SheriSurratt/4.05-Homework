package com.example.demoSpringIntro.repository;

import com.example.demoSpringIntro.model.Customer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepo extends CrudRepository<Customer,Long> {
    List<Customer>findByLastName(String lastName);
}
