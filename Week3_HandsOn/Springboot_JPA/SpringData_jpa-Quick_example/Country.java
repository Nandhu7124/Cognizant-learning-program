package com.cognizant.ormlearn.model;

import javax.persistence.*;

@Entity
@Table(name="country")
public class Country {

    @Id
    @Column(name="code")
    private String code;

    @Column(name="name")
    private String name;

}
