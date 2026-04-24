package com.jobportal.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;

    // 🔹 Getter for id
    public Long getId() {
        return id;
    }

    // 🔹 Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // 🔹 Getter for email
    public String getEmail() {
        return email;
    }

    // 🔹 Setter for email
    public void setEmail(String email) {
        this.email = email;
    }

    // 🔹 Getter for password
    public String getPassword() {
        return password;
    }

    // 🔹 Setter for password
    public void setPassword(String password) {
        this.password = password;
    }
}