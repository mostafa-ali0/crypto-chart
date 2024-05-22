export default function TableRow(props: any) {
  return (
    <tr>
      <td>
        <img src={props.picUrl} alt="" />
      </td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>
        <img src={props.sparkline} alt="" />
      </td>
    </tr>
  );
}
