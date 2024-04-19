package com.grab.grabwebapp.services;

import com.grab.grabwebapp.entity.user.Operator;
import com.grab.grabwebapp.repository.OperatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OperatorServices {
    private List<Operator> operatorList = new ArrayList<>();
    private final OperatorRepository operatorRepository;

    @Autowired
    public OperatorServices(OperatorRepository operatorRepository) {
        this.operatorRepository = operatorRepository;
        initializeOperatorList();
    }

    private void initializeOperatorList() {
        operatorList = operatorRepository.findAll();
    }

    public List<Operator> getAllOperators() {
        return operatorList;
    }
    public Operator getAvailableOperator(){
        for(Operator operator : operatorList){
            if(operator.getState() == 0){
                return operator;
            }
        }
        return null;
    }
}
