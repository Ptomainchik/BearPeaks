import classes from '../../Styles/Styles.module.css'


export const GuildTable = () => {
    return (
        <div className={classes.cardtableg}>
 <h3>Гильдии</h3>
  <table border={5} bgcolor={"grey"} className={classes.table}>
    <thead>
 <tr>
  <th>Гильдия</th>
  <th>Глава гильдии</th>
  <th>Деятельность гильдии</th>
  <th>Золото гильдии</th>
 </tr>
 </thead>
 <tbody>
 <tr>
  <td>Гильдия кузнецов</td>
  <td>Морей Хранитель</td>
  <td>Кузнечное ремесло</td>
  <td>500 тонн</td>
 </tr>
 <tr>
  <td>Гильдия торговцев</td>
  <td>Бартон Златопалый</td>
  <td>Торговля</td>
  <td>300 тонн</td>
 </tr>
 </tbody>
</table>
</div>
    )
}