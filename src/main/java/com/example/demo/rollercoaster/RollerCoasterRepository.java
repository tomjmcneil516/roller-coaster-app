package com.example.demo.rollercoaster;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RollerCoasterRepository
        extends JpaRepository<RollerCoaster, RollerCoasterId> {

    @Query("SELECT r FROM RollerCoaster r WHERE r.amusementParkName = ?1 AND r.rollerCoasterName = ?2")
    Optional<RollerCoaster> findRollerCoasterByAmusementParkNameAndRollerCoasterName(
            String amusementParkName, String rollerCoasterName);

    @Query("SELECT DISTINCT amusementParkName FROM RollerCoaster")
    List<String> findAmusementParks();

    @Query("SELECT r FROM RollerCoaster r WHERE r.amusementParkName = ?1")
    List<RollerCoaster> findRollerCoasterByAmusementParkName(String amusementParkName);
}
