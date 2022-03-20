import { NextPage } from 'next'
import Head from 'next/head'

import { PROJECT_NAME } from '../lib/const'
import HeaderImage from '../lib/header-image'
import Map from '../lib/map'
import styles from '../styles/Home.module.css'

import eniseysk from '../lib/resources/eniseysk.png'

const Eniseysk: NextPage = () => {
  return (
    <div>
      <Head>
        <title>г. Енисейск, 1926 &mdash; 1929 г | {PROJECT_NAME}</title>
      </Head>
      <HeaderImage src={eniseysk} alt='Фотография Енисейска' />
      <div className={styles.textContainer}>
        <main className={styles.innerTextContainer}>
          <h1 className='title'>Енисейск</h1>
          <h2 className='subtitle'>1926 &mdash; 1929</h2>
          <blockquote>
            <p>
              Мы знаем, что вы невиновны и ничего не сделали плохого. Но вы
              немного неустойчивы, вам лучше пожить вне Москвы, например, в
              Енисейске. Вы молоды, здоровы, вам везде будет хорошо.
            </p>
            <footer>
              — <cite>Витковский Д.П. Полжизни // Знамя. 1991. №6</cite>
            </footer>
          </blockquote>
          <p>
            А.И. Солженицын в своем произведении «Архипелаг ГУЛАГ» писал, как
            проходили допросы в то время:
          </p>
          <blockquote>
            <p>
              В 1919 главный следовательский прием был: наган на стол. Так шло
              не только политическое, так шло и «бытовое» следствие. &lt;...&gt;
              Наган пугающе лежит, иногда наставляется на тебя, и следователь не
              утомляет себя придумыванием, в чём ты виноват, но: «Рассказывай,
              сам знаешь!»
            </p>
            <footer>
              —{' '}
              <cite>
                Солженицын А. И. Архипелаг ГУЛАГ. 1918—1956. Опыт
                художественного исследования. М: АСТ-Астрель. 2010. Том 1.
              </cite>
            </footer>
          </blockquote>
          <p>Так в 1929 требовали от многих, так требовали и от Витковского.</p>
          <p>
            Енисейск - один из старейших сибирских городов; город в Красноярском
            крае России, административный центр Енисейского района.{' '}
          </p>
          <p>
            В середине 17-го века сюда ссылали старообрядцев (в том числе и
            протопопа Аввакума) и чернокнижников. Однако всё это не идёт ни в
            какое сравнение с тем потоком ссыльных, который хлынул в Енисейск,
            Енисейский уезд и в дальнейшем Енисейский район после революции.
          </p>
          <p>
            В 19 веке Енисейск - самый крупный город губернии - входил в десятку
            лучших уездных городов Российского государства. Однако после
            прокладки Московско-Иркутского тракта и Транссибирской магистрали
            Енисейск, утратив значение главного города Восточной Сибири,
            становится дальней глубинкой:
          </p>
          <blockquote>
            <p>
              Енисейск тихо доживал свои дни, и только пустовавшие, но еще
              крепкие большие амбары &lt;...&gt; да просторные, иногда по
              помещичьему типу построенные дома напоминали о прошлом, когда он
              был одним из больших административных центров Сибири и перевальным
              пунктом между хлебным югом и северной тайгой
            </p>
            <footer>
              — <cite>Витковский Д.П. Полжизни // Знамя. 1991. №6</cite>
            </footer>
          </blockquote>
          <p>
            26 марта 1926 года арестован как «родственник генерала Витковского,
            начальника штаба армии Петра Врангеля», хотя родственником этого
            генерала он не был. Следователь Ашарин обвинил Витковского в связях
            с заграницей.{' '}
          </p>
          <p>
            17 мая того же года Витковский приговорён к трём годам ссылки. В
            июле был отправлен в Енисейск Красноярского края. Работал лаборантом
            на золотом прииске, затем рабочим в лесотехнической экспедиции.
          </p>
          <blockquote className='long'>
            <p>
              Ссыльных в Енисейске и окрестных селах было довольно много,
              вероятно, несколько сот человек: бывшие люди разного рода, бывшие
              офицеры, меньшевики, спекулянты, валютчики &lt;...&gt; Мне удалось
              устроиться лаборантом на северный золотой прииск в четырехстах
              километрах от Енисейска &lt;...&gt; Ранним утром мы (я и
              проводник: без проводника в северную тайгу не ездят) переплываем
              на лодке Енисей, верхом на конях трогаемся в путь и сразу въезжаем
              в тайгу. Она теперь не кончится до самых приисков. Дорога сначала
              ровная, среди огромных лиственниц, пихт, кедров, скоро начинает
              петлять. Мы пересекаем вброд ручьи, небольшие речки. Проводник —
              молодой, рослый белобрысый Санча &lt;...&gt; явно старается
              показать тайгу во всей прелести &lt;...&gt; Постепенно подъем
              становится круче, дорога превращается в тропинку и временами
              совсем исчезает. Кони очень медленно бредут прямо руслом ручья,
              сбегающего сверху, и осторожно переставляют ноги в чем-то подобном
              кипящему перловому супу, только вместо крупы — галька и круглые
              булыжники разного размера. Поднимаемся долго, потом также руслом
              другого ручья спускаемся вниз. &lt;...&gt; «Кругом тайга и дырка в
              небо», по Санчиному определению
            </p>
            <footer>
              — <cite>Витковский Д.П. Полжизни // Знамя. 1991. №6</cite>
            </footer>
          </blockquote>
          <p>
            Освобождён из ссылки через три года - весной 1929 года. Переехал в
            Среднюю Азию, работал на химическом заводе. В 1930 году вернулся в
            Москву на научную работу. Испытал серьёзные трудности с получением
            документов для прописки, но был восстановлен в должности
            преподавателя в военной школе.
          </p>
        </main>
      </div>
      <div className={styles.mapContainer}>
        <Map activeMarker='lubyansk' />
      </div>
    </div>
  )
}

export default Eniseysk
