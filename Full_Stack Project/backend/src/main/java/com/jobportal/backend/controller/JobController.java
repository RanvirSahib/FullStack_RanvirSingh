package com.jobportal.backend.controller;

import com.jobportal.backend.model.Job;
import com.jobportal.backend.repository.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @PostMapping("/add-job")
    public String addJob(@RequestBody Job job) {
        jobRepository.save(job);
        return "Job Added";
    }

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }
}