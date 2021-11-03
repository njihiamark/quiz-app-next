export default function cssRatingClasses(rounded_percentage: number, nearest_ten_percentage: number): string {
    if (rounded_percentage == 100){
        return "tenth"
    }
    else if (rounded_percentage >= 95 && rounded_percentage <= 99){
        return "almost-tenth"
    }
    else if(nearest_ten_percentage == 90){
        return "nineth"
    }
    else if(nearest_ten_percentage == 80){
        return "eighth"
    }
    else if(nearest_ten_percentage == 70){
        return "seventh"
    }
    else if(nearest_ten_percentage == 60){
        return "sixth"
    }
    else if(nearest_ten_percentage == 50){
        return "fifth"
    }
    else if(nearest_ten_percentage == 40){
        return "fourth"
    }
    else if(nearest_ten_percentage == 30){
        return "third"
    }
    else if(nearest_ten_percentage == 20){
        return "second"
    }
    else if(nearest_ten_percentage == 10){
        return "first"
    }else{
        return "zero"
    }
  }

