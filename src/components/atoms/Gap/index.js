export default function Gap({ props }) {
  const { height=0, width=0 } = props;

  return(
    <div style={{height, width}} />
  );
}
