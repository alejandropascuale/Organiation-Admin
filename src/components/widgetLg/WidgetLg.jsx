import './WidgetLg.css'

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Ammount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2018-04/shutterstockyulia_mayorova.jpg?itok=Kkr_Nqk5" 
              alt="" 
              className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2018-04/shutterstockyulia_mayorova.jpg?itok=Kkr_Nqk5" 
              alt="" 
              className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type='Declined' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2018-04/shutterstockyulia_mayorova.jpg?itok=Kkr_Nqk5" 
              alt="" 
              className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type='Pending' />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img 
              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2018-04/shutterstockyulia_mayorova.jpg?itok=Kkr_Nqk5" 
              alt="" 
              className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  )
}
