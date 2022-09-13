package com.cdac.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.app.domain.CCATStudent;

@Repository
public interface IRegistrationRepository extends JpaRepository<CCATStudent, Long> {
	public CCATStudent findByCcatNoAndFName(Long ccatNo,String fName);
}
