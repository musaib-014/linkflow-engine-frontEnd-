import TrustScore from "./TrustScore";

function ContactRow({ contact, onEdit, onAnonymize, onDelete }) {
  function balanceColor(value) {
    if (value > 0) return "balance-positive";
    if (value < 0) return "balance-negative";
    return "";
  }

  return (
    <tr>
      <td>{contact.isAnonymized ? "Anonymous" : contact.name}</td>
      <td>{contact.isAnonymized ? "—" : contact.email}</td>
      <td>
        <TrustScore value={contact.trustScore} />
      </td>
      <td className={balanceColor(contact.balance)}>{contact.balance}</td>
      <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
      <td>
        <button onClick={() => onEdit(contact)}>Edit</button>
        <button onClick={() => onAnonymize(contact.id)}>Erase Me</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactRow;
