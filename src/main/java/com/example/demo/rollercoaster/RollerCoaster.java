package com.example.demo.rollercoaster;


import javax.persistence.*;


@Entity(name = "RollerCoaster")
@Table
@IdClass(RollerCoasterId.class)
public class RollerCoaster {
    @Id
    private String rollerCoasterName;
    @Id
    private String amusementParkName;
    private int votes;
    private int score;

    public RollerCoaster() {
    }

    public RollerCoaster(String rollerCoasterName,
                         String amusementParkName,
                         int votes,
                         int score) {
        this.rollerCoasterName = rollerCoasterName;
        this.amusementParkName = amusementParkName;
        this.votes = votes;
        this.score = score;
    }

    public String getRollerCoasterName() {
        return rollerCoasterName;
    }

    public String getAmusementParkName() {
        return amusementParkName;
    }

    public void setRollerCoasterName(String rollerCoasterName) {
        this.rollerCoasterName = rollerCoasterName;
    }

    public void setAmusementParkName(String amusementParkName) {
        this.amusementParkName = amusementParkName;
    }

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }

    @Override
    public String toString() {
        return "RollerCoaster{" +
                "rollerCoasterName='" + rollerCoasterName + '\'' +
                ", amusementParkName='" + amusementParkName + '\'' +
                ", votes=" + votes +
                ", score=" + score +
                '}';
    }
}
