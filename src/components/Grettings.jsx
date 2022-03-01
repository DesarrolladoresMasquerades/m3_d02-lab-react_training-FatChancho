export default function Grettings(props) {
  function lang(propslang) {
    switch (propslang) {
      case 'de': {
        return 'Hallo';
      }
      case 'es': {
        return 'Hola';
      }
      case 'en': {
        return 'Hello';
      }
      case 'fr': {
        return 'Bonjour';
      }
      default:
        return 'bon dia';
    }
  }
  return (
    <div>
      {lang(props.lang)}
      {props.children}
    </div>
  );
}
