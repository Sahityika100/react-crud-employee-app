package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Employee;
import com.example.repo.EmpRepo;

@Service
public class EmpService {

	@Autowired 
	private EmpRepo er;

	public String  save(Employee e) {
		er.save(e);
		return "Emp Added";
	}

	public List<Employee> getAll() {
		return er.findAll();
	}

	public void delete(Long id) {
		er.deleteById(id);
	}

	public Employee getById(Long id) {
		return er.getById(id);
	}
}
