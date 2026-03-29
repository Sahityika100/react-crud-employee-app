package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Employee;
import com.example.service.EmpService;

@RestController
@CrossOrigin(origins = "http://localhost:<port>")
@RequestMapping("/emp")
public class EmpController {

	@Autowired
	private EmpService es;

	@PostMapping("/addEmp")
	public String addEmp(@RequestBody Employee e) {
		return es.save(e);
	}
	
	@GetMapping("/showAllEmp")
	public List<Employee> getAll(){
		return es.getAll();
	}
	
	@PutMapping("/updateEmp/{id}")
	public String updateEmp(@PathVariable Long id, @RequestBody Employee e) {
		es.save(e);
		return "Employee Updated Successfully!";
	}

	@DeleteMapping("/deleteEmp/{id}")
	public String deleteEmp(@PathVariable Long id) {
		es.delete(id);
		return "Deleted";
	}
	@GetMapping("/getById/{id}")
	public Employee getEmp(@PathVariable Long id) {
		return es.getById(id);
	}
}
