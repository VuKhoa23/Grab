package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.dto.AuthResponseDTO;
import com.grab.grabwebapp.dto.LoginDTO;
import com.grab.grabwebapp.dto.RegisterDTO;
import com.grab.grabwebapp.entity.user.Customer;
import com.grab.grabwebapp.entity.user.Driver;
import com.grab.grabwebapp.entity.user.GrabUser;
import com.grab.grabwebapp.entity.Role;
import com.grab.grabwebapp.entity.user.Operator;
import com.grab.grabwebapp.repository.RoleRepository;
import com.grab.grabwebapp.repository.UserRepository;
import com.grab.grabwebapp.security.JwtGenerator;
import com.grab.grabwebapp.services.OperatorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private JwtGenerator jwtGenerator;
    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private OperatorServices operatorServices;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager,
                          UserRepository userRepository,
                          RoleRepository roleRepository,
                          PasswordEncoder passwordEncoder,
                          JwtGenerator jwtGenerator,
                          OperatorServices operatorServices) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.operatorServices = operatorServices;
    }
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO registerDTO){
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            return new ResponseEntity<>("Username is already taken", HttpStatus.BAD_REQUEST);
        }else{
            GrabUser user = new GrabUser();
            user.setUsername(registerDTO.getUsername());
            user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            Role role = roleRepository.findByName("USER").get();
            user.setRoles(Collections.singletonList(role));

            userRepository.save(user);
            return new ResponseEntity<>("User registered", HttpStatus.OK);
        }
    }

    @PostMapping("register/driver")
    public ResponseEntity<String> registerDriver(@RequestBody RegisterDTO registerDTO){
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            return new ResponseEntity<>("Username is already taken", HttpStatus.BAD_REQUEST);
        }else{
            Driver driver = new Driver();
            driver.setUsername(registerDTO.getUsername());
            driver.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            Role role = roleRepository.findByName("DRIVER").orElseThrow(() -> new RuntimeException("Role not found"));
            driver.setRoles(Collections.singletonList(role));

            userRepository.save(driver);
            return new ResponseEntity<>("Driver registered", HttpStatus.OK);
        }
    }

    @PostMapping("register/customer")
    public ResponseEntity<String> registerCustomer(@RequestBody RegisterDTO registerDTO){
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            return new ResponseEntity<>("Username is already taken", HttpStatus.BAD_REQUEST);
        }else{
            Customer driver = new Customer();
            driver.setUsername(registerDTO.getUsername());
            driver.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            Role role = roleRepository.findByName("USER").orElseThrow(() -> new RuntimeException("Role not found"));
            driver.setRoles(Collections.singletonList(role));

            userRepository.save(driver);
            return new ResponseEntity<>("Customer registered", HttpStatus.OK);
        }
    }

    @PostMapping("register/operator")
    public ResponseEntity<String> registerOperator(@RequestBody RegisterDTO registerDTO){
        if(userRepository.existsByUsername(registerDTO.getUsername())){
            return new ResponseEntity<>("Username is already taken", HttpStatus.BAD_REQUEST);
        }else{
            Operator operator = new Operator();
            operator.setUsername(registerDTO.getUsername());
            operator.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            Role role = roleRepository.findByName("OPERATOR").orElseThrow(() -> new RuntimeException("Role not found"));
            operator.setRoles(Collections.singletonList(role));

            userRepository.save(operator);
            System.out.println("test operator " + operatorServices.getAllOperators().toString());
            return new ResponseEntity<>("Operator registered", HttpStatus.OK);
        }
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }
}
