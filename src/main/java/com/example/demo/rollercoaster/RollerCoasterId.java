package com.example.demo.rollercoaster;

import java.io.Serializable;

public class RollerCoasterId implements Serializable {
    private String rollerCoasterName;
    private String amusementParkName;

    public RollerCoasterId(){
    }

    public RollerCoasterId(String rollerCoasterName, String amusementParkName) {
        this.rollerCoasterName = rollerCoasterName;
        this.amusementParkName = amusementParkName;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((rollerCoasterName == null) ? 0 : rollerCoasterName.hashCode());
        result = prime * result + ((amusementParkName == null) ? 0 : amusementParkName.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        RollerCoasterId other = (RollerCoasterId) obj;
        if (rollerCoasterName == null) {
            if (other.rollerCoasterName != null)
                return false;
        } else if (!rollerCoasterName.equals(other.rollerCoasterName))
            return false;
        if (amusementParkName == null) {
            if (other.amusementParkName != null)
                return false;
        } else if (!amusementParkName.equals(other.amusementParkName))
            return false;
        return true;
    }


}
