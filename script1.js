
let day= "Wednesday"

switch (day) {
  case 'Monday':
    // code
    console.log("7 AM");
    break;
  case 'Tuesday':
    case 'Wednesday':
      case 'Thursday':
        console.log("4 AM");
        break;
        case 'Friday':
          console.log("9 AM");
          break;
          case 'Saturday':
            case 'Sunday':
              console.log("8 AM");
              break;
  default:
    // code
    console.log("Sleep");
}