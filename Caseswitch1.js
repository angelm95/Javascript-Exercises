let a = 2 + 2;
a=4;

/* a=''; is going to trigger default case and alert "I don't know such values" */
/* a=5; is going to trigger case 5 and alert "Too big" */
/* a=3; is going to trigger case 3 and alert "Too small" */
/* a=4; is going to trigger case 4 and alert "Exactly" */

switch (a) {
  case 3:
    alert( "Too small");
    break;
  case 4:
    alert( "Exactly!" );
    break;
  case 5:
    alert( "Too big" );
    break;
  default:
    alert( "I don't know such values" );
}
