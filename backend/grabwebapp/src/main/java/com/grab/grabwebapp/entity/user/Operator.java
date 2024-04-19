package com.grab.grabwebapp.entity.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "operators")
@Data
@NoArgsConstructor
public class Operator extends GrabUser {
    private int state;   // free: 0 / busy: 1
}
