package com.example.demo.rollercoaster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RollerCoasterService {

    private final RollerCoasterRepository rollerCoasterRepository;

    @Autowired
    public RollerCoasterService(RollerCoasterRepository rollerCoasterRepository) {
        this.rollerCoasterRepository = rollerCoasterRepository;
    }

    public List<RollerCoaster> getRollerCoasters(){
        return rollerCoasterRepository.findAll();
    }

    public List<String> getAmusementParks(){ return rollerCoasterRepository.findAmusementParks(); }

    public List<RollerCoaster> getRollerCoastersFromAmusementPark(String amusementParkName){
        return rollerCoasterRepository.findRollerCoasterByAmusementParkName(amusementParkName);
    }

    public Optional<RollerCoaster> replaceRollerCoasterRating(RollerCoaster newRollerCoaster, String amusementParkName,
                                                              String rollerCoasterName){
        return rollerCoasterRepository.findRollerCoasterByAmusementParkNameAndRollerCoasterName(amusementParkName, rollerCoasterName)
                .map(RollerCoaster -> {
                    RollerCoaster.setVotes(newRollerCoaster.getVotes());
                    RollerCoaster.setScore(newRollerCoaster.getScore());
                    return rollerCoasterRepository.save(RollerCoaster);
                });
    }

    public Optional<RollerCoaster> getRollerCoaster(String amusementParkName, String rollerCoasterName){
        return rollerCoasterRepository.findRollerCoasterByAmusementParkNameAndRollerCoasterName(
                amusementParkName, rollerCoasterName);

    }
}
