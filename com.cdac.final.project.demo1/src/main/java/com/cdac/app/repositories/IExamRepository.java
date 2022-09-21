package com.cdac.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.app.domain.QuestionPaper;

public interface IExamRepository extends JpaRepository<QuestionPaper, String> {
}
