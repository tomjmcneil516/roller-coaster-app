package com.example.demo.rollercoaster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin("*")
public class RollerCoasterController {

    private final RollerCoasterService rollerCoasterService;

    @Autowired
    public RollerCoasterController(RollerCoasterService rollerCoasterService){
        this.rollerCoasterService = rollerCoasterService;
    }

    @GetMapping(
            value = "/roller-coasters"
    )
    public List<RollerCoaster> getRollerCoasters(){
        return rollerCoasterService.getRollerCoasters();
    }

    @GetMapping(
            value = "/amusement-parks"
    )
    public List<String> getAmusementParks(){
        return rollerCoasterService.getAmusementParks();
    }

    @GetMapping(
            value = "/amusement-parks",
            params = {"amusement-park-name"}
    )
    public List<RollerCoaster> getRollerCoastersFromAmusementPark(@RequestParam("amusement-park-name") String amusementParkName){
        return rollerCoasterService.getRollerCoastersFromAmusementPark(amusementParkName);
    }


    @GetMapping(
            value = "/roller-coasters",
            params = {"roller-coaster-name", "amusement-park-name"}
    )
    public Optional<RollerCoaster> getRollerCoaster(
            @RequestParam("amusement-park-name") String amusementParkName,
            @RequestParam("roller-coaster-name") String rollerCoasterName
    ){
        return rollerCoasterService.getRollerCoaster(amusementParkName, rollerCoasterName);
    }

    @PutMapping(
            value = "/roller-coasters",
            params = {"roller-coaster-name", "amusement-park-name"}
    )
    Optional<RollerCoaster> updateRollerCoasterRating(
            @RequestBody RollerCoaster newRollerCoaster,
            @RequestParam("amusement-park-name") String amusementParkName,
            @RequestParam("roller-coaster-name") String rollerCoasterName
    ){
        return rollerCoasterService.replaceRollerCoasterRating(newRollerCoaster, amusementParkName, rollerCoasterName);
    }




}
