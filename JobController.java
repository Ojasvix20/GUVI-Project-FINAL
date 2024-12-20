package com.jobportal.controller;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }
}
