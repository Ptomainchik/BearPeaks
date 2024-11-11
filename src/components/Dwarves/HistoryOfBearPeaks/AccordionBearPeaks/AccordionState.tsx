import { Accordion } from "./Accordion";
import classes from '../../Styles/BearPeaks.module.css'
import KingDwarves from '../../../../images/Dwarves/HistoryBearPeaks/KingDwarves.jpg'
import DwarfOnABear from '../../../../images/Dwarves/HistoryBearPeaks/DwarfOnABear.jpg'
import DwarfAngry from '../../../../images/Dwarves/HistoryBearPeaks/DwarfAngry.jpg'
import FloodedMines from '../../../../images/Dwarves/HistoryBearPeaks/FloodedMines.jpg'
import DwarfMines from '../../../../images/Dwarves/HistoryBearPeaks/DwarfMines.jpg'
import Forge from '../../../../images/Dwarves/HistoryBearPeaks/Forge.jpg'
import DwarfExpedition from '../../../../images/Dwarves/HistoryBearPeaks/DwarfExpedition.jpg'
import SapphireMountains from '../../../../images/Dwarves/HistoryBearPeaks/SapphireMountains.jpg'
import DwarvenTunnel from '../../../../images/Dwarves/HistoryBearPeaks/DwarvenTunnel.jpg'
import DwarvenTunnel2 from '../../../../images/Dwarves/HistoryBearPeaks/DwarvenTunnel2.jpg'



export const AccordionState = () => {
    const accordionItems = [
      {
        title: 'История Королевства Медвежьих Вершин',
        content: (
          <div>
            <div className={classes.historyPictures}>
  <img title="Король Доронг Сапфир" src={KingDwarves} alt="Король Доронг Сапфир " className={classes.kingDwarves}/>
  <img title="Медвежьи Вершины" src={DwarfOnABear} alt="Вид на Горы где бродят медведи" className={classes.kingDwarves}/>
</div>

 <div className={classes.contentScroll}><h2>История Королевства Медвежьих Вершин</h2>
     <p><strong>
     Во времена вечной зимы гномы жили в предгорьях Медвежьих вершин. Но когда континент стал оттаивать, земля начала проваливаться у них под ногами. Образуя огромные расщелины и сеть подземных лабиринтов.
     По которым гномы и вышли в нагорья вершин. Где они обнаружили большие залежи руды. К тому же в ущельях процветала жизнь,
     обитающая там фауна могла прокормить весь тогда ещё разрозненный народ вынужденных переселенцев. Так гномы стали заселять эти нетронутые горы и тоннели.
     Множество общин старалось выбрать для себя более богатые и плодородные земли. Они враждовали между собой, пока Кунок Укротитель глава одного из кланов не открыл способ приручения медведей.
     Оседлавшие этих свирепых зверей гномы стали подчинять один за другим враждебные кланы. Многие и не пытались сопротивляться и жаждали вступить в ряды новых хозяев гор. В итоге народ гномов объединился в один могучий клан, позже ставший королевством Медвежьих Вершин.
     Кунока Укротителя почитают во всех крепостях и поселениях как великого предка и спасителя народа гномов. Нынешний король Доронг Сапфир ведёт свой род от древнего прародителя.
     Именно он открыл гномам глаза на остальной мир и разрешил торговлю почти со всеми расами континента. Разбив тем самым оковы тысячелетнего отрешения от других цивилизаций. Что в свою очередь позволило королевству стать одним из богатейших на всём Танахе.       
     </strong></p> 
</div>
          </div>
        ),
      },
      {
        title: 'Ночь Золотой паники',
        content: (
          <div>
           <div className={classes.historyPictures}>
    <img title="Гном из экспедиции кричит в гневе" className={classes.historyPicture} src={DwarfAngry} alt="Гном из экспедиции кричит в гневе"/>
    <img title="Разрушенное предместье Медвежьих Вершин" className={classes.historyPicture} src={FloodedMines} alt="Озеро после Ночи Золотой паники"/>
  </div>
  <div className={classes.contentScroll}>
      <h2>Ночь Золотой паники</h2>
      <p><strong> 
      В далекие столетия когда добыча золотоносной руды обрела сумасшедшие объёмы, прозванной золотой паникой. Гномы погружались всё глубже в недра Вершин, в поисках больших богатых месторождений. Они обнаружили на западе хребта омывающемся водами озера холода, подгорье с затопленными природными тоннелями.
      По берегам озера было найдено множество золотоносного песка и ближе к расщелинам уходящим вглубь горы, они становились всё насыщенней золотом. Тогда инженеры разработали план по отводу воды от тоннелей подгорья. Они построили защитные дамбы и опустошили подземелья от воды.
      Вокруг новых наспех построенных рудников, стало образовываться огромное поселение, куда стекались десятки артелей. Добыча велась алчно и неустанно, не обращая внимание на опасения инженеров. Подземная добыча разрасталась стремительно, там где вчера был камень и стены на следующую неделю появлялась обширная сеть путей для вагонеток.
      Под озером находились пустоты оставшиеся ещё со времён когда Танах был покрыт льдом. В ночь из-за перенаправления водного массива своды обрушились и дамбы не выдержали, став разрушатся. Потоки воды поглотили поселения предгорья и ринулись в рудники, снося всё на своём пути.
      Мощным накатом воды - сети тоннелей стали обрушатся один за другим и утягивать за собой всё и всяк. С такой мощью не смогла совладать даже сама гора и отколовшаяся её часть рухнула и погребла под собой десятки тысяч гномов.
      Узнав о трагедии король выслал экспедицию для поисков выживших. Но прибыв на место, отряды обнаружили лишь вновь восстановившееся озеро, груды камней и останки поселения. Ландшафт горы же изменился навсегда.
      После этого были приняты порядок и нормы выполнения работ по добыче ископаемых. Эта печаль останется в памяти гномов как Ночь Золотой паники.
      </strong></p>
    </div>
          </div>
        ),
      },
      {
        title: 'Ремесло',
        content: (
          <div>
      <div className={classes.historyPictures}>
   <img title="Рудники Королевства Медвежьих Вершин" className={classes.historyPicture}  src={DwarfMines} alt="Рудники гномов"/>
   <img title="Кузница Королевства Медвежьих Вершин" className={classes.historyPicture} src={Forge} alt="Гном работает в кузнице"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Ремесло</h2>
        <p><strong>
        Медвежьи Вершины славятся своей гильдией кузнецов и их качественной, тонкой работой. Оружие и доспехи, инструмент и предметы обихода, это не весь список изделий которые подвластны мастерам кузнечного дела королевства. Рудокопы постоянно ведут добычу, вне зависимости дня и ночи.
        Выплавляя тонны металла для поставки его в кузни. Заказы приходят один за другим со всего света, и спрос опережает предложения. Благодаря чему цена на товар из Медвежьих Вершин баснословная.
        К тому же гильдия торговцев идёт на всяческие ухищрения, чтобы ещё выше поднять цены.
        В Королевстве гномов всегда была лишь одна гильдия кузнецов. Её торговцам, не нравилось 
        когда с их трудом обращаются как с второстепенной посредственной задачей. Они считали что произвести товар это полдела, а вот преподнести и продать его покупателю, так чтобы тот остался доволен и с пустыми карманами - это и есть искусство. 
        После долгих разбирательств и споров, торговцы решили создать свою гильдию. Где они оставляли бы себе часть золота с продаж. Сначала их восприняли как шутов, но со временем обратили внимание, что торговля у них идёт полным ходом и прибыль 
        растёт в двойне у тех кто к ним обратился. Так в королевстве появилась вторая гильдия.   
        </strong></p>
      </div>

          </div>
        ),
      },
      {
        title: 'Королевский камень',
        content: (
          <div>
      <div className={classes.historyPictures}>
   <img title="Сапфировые озёра" className={classes.historyPicture} src={SapphireMountains} alt="В горах виднеется синее свечение"/>
   <img title="Экспедиция гномов" className={classes.historyPicture} src={DwarfExpedition} alt="Экспедиция гномов"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Королевский камень</h2>
        <p><strong>
          В поисках ископаемых отправляются десятки, а то и сотни гномов. Но есть места в которых не бывал ещё никто, ввиду их сложного ландшафта и трудных климатических условий. Незадолго до своей коронации, молодой Доронг вызвался добровольцем в одну из таких экспедиций.
          Они долго брели к отмеченному месту на карте, когда в горах неожиданно начался сильный буран. В такой ситуации вся экспедиция должна была спуститься в базовый лагерь. Но видимо что-то пошло не так и часть гномов в которой находился будущий король откололась от всей группы.
          В непроглядной пелене снега они заблудились и решили разбить лагерь, чтобы переждать непогоду. На утро после того как всё закончилось и гномы выбрались из своих засыпанных снегом палаток, перед ними открылся удивительный пейзаж. Пики вершин озарялись ярким солнцем,
          а на плато сияло синее горное озеро, окрашивая морозную дымку голубым оттенком. То были залежи сапфира вросшие в лёд водоёма. Спустя недели поисков отколовшейся группы, гномы из экспедиции потеряли надежду найти их живыми. Уже смирившись с утратой собратьев,
          они собирались возвращаться домой с печальной вестью. Но один из них заметил, как в дали показались фигуры среди зубов заснеженных скал. Когда их встретили, не могли поверить своим глазам. Измученные, с отёкшими лицами, они тащили на спинах чем то набитые рюкзаки.
          Так были обнаружены сапфировые озёра, а сам камень стали называть королевским, из-за трудностей которую он представляет в своей добычи. Немалой ролью его названию, послужило то что в группе был и сам Доронг. Так же получивший имя Сапфир.          
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: 'Тоннели',
        content: (
          <div>
      <div className={classes.historyPictures}>
  <img title="Тоннель" className={classes.historyPicture} src={DwarvenTunnel} alt="Тоннель"/>
  <img title="Тоннель2" className={classes.historyPicture} src={DwarvenTunnel2} alt="Тоннель2"/>
  </div>
  <div className={classes.contentScroll}>
        <h2>Тоннели</h2>
        <p><strong>
         Копали, копали и выкопали тоннели.
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
      {
        title: 'Пока не придумал',
        content: (
          <div>
      
          </div>
        ),
      },
    ];
  
    return (
      <div >
        <Accordion items={accordionItems} />
      </div>
    );
  }