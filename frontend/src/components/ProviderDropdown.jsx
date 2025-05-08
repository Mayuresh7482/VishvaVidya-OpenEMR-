export default function ProviderDropdown({ providers, onSelect }) {
   return (
     <select onChange={(e) => onSelect(e.target.value)}>
       <option value="all">All Users</option>
       {providers.map(provider => (
         <option key={provider} value={provider}>{provider}</option>
       ))}
     </select>
   );
 }