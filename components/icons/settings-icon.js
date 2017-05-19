'use strict'

import PropTypes from 'prop-types'

const SettingsIcon = ({ size = '16px', color = '#999' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16">
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="header"
        transform="translate(-1104.000000, -31.000000)"
        fillRule="nonzero"
        fill={color}
      >
        <g id="menu">
          <g transform="translate(755.000000, 28.000000)">
            <g id="settings" transform="translate(349.000000, 3.000000)">
              <path d="M6.97909554,-6.8754908e-05 C6.64395658,0.0205978472 6.4350939,0.234930511 6.33326422,0.479096415 L5.90618222,1.95826513 C5.66355965,2.04313153 5.42534039,2.1382979 5.1978511,2.24993088 L3.86452193,1.49993323 C3.61135272,1.35793367 3.2657238,1.40733352 3.06244111,1.61453287 L1.61452896,3.06246168 C1.41529625,3.26676104 1.37075972,3.60522665 1.51036262,3.85412587 L2.26036028,5.20828831 C2.14949396,5.43515427 2.04249096,5.66432022 1.95827789,5.90618613 L0.479115809,6.33328479 C0.206333327,6.41325121 0.00182396635,6.68445036 -4.93611338e-05,6.96868281 L-4.93611338e-05,9.0207764 C-0.00271601947,9.30850883 0.202996671,9.58567463 0.479115809,9.66660771 L1.95827789,10.0832731 C2.04249762,10.325139 2.14950396,10.5543383 2.26036028,10.7811709 L1.51036262,12.1353333 C1.37075972,12.3842326 1.41529625,12.7226982 1.61452896,12.9269975 L3.06244111,14.3749263 C3.2657238,14.5821257 3.61135272,14.6314922 3.86452193,14.4894926 L5.1978511,13.739495 C5.42877705,13.8528946 5.67005629,13.955861 5.91659886,14.041594 L6.33326422,15.5103228 C6.41040731,15.7902553 6.68874311,16.0012546 6.97909554,15.9999213 L9.02075583,15.9999213 C9.31110825,15.9999213 9.58944405,15.7902553 9.66658714,15.5103228 L10.0832525,14.041594 C10.3297951,13.955861 10.571071,13.8528946 10.8020003,13.739495 L12.1353294,14.4894926 C12.3884986,14.6314922 12.7341276,14.5821257 12.9374103,14.3749263 L14.3853224,12.9269975 C14.5845551,12.7226982 14.6290916,12.3842326 14.4894887,12.1353333 L13.7394911,10.7811709 C13.8503507,10.5543383 13.9573537,10.325139 14.0415735,10.0832731 L15.5207355,9.66660771 C15.7968547,9.58567463 16.0024973,9.30850883 15.9999007,9.0207764 L15.9999007,6.96868281 C15.9979007,6.68445036 15.793518,6.41325121 15.5207355,6.33328479 L14.0415735,5.90618613 C13.9573604,5.66432022 13.8503607,5.43515427 13.7394911,5.20828831 L14.4894887,3.85412587 C14.6290916,3.60522665 14.5845551,3.26676104 14.3853224,3.06246168 L12.9374103,1.61453287 C12.7341276,1.40733352 12.3884986,1.35793367 12.1353294,1.49993323 L10.8020003,2.24993088 C10.574511,2.1382979 10.3362917,2.04313153 10.0936691,1.95826513 L9.66658714,0.479096415 C9.58565073,0.202997277 9.30848159,-0.00266874679 9.02075583,-6.87549079e-05 L6.97909554,-6.87549079e-05 L6.97909554,-6.8754908e-05 Z M7.47909398,1.33326708 L8.52075739,1.33326708 L8.89575622,2.62496304 C8.95762936,2.84192903 9.13711213,3.02142847 9.35408812,3.08329495 C9.76131351,3.1954946 10.147209,3.35582743 10.5103345,3.56246012 C10.7076406,3.67819309 10.9657097,3.68229308 11.1665825,3.57279342 L12.3436621,2.9165288 L13.0832431,3.64569319 L12.4269952,4.83318948 C12.3181522,5.0298222 12.3181522,5.28242141 12.4269952,5.4790208 C12.6335712,5.842053 12.8043873,6.22805179 12.916577,6.63528385 C12.9753501,6.85604983 13.1555196,7.04031592 13.3749089,7.10401572 L14.6665715,7.47901455 L14.6665715,8.52067796 L13.3749089,8.88527682 C13.1555196,8.94897662 12.9753501,9.13324271 12.916577,9.35400869 C12.8043973,9.76124075 12.6336245,10.1471062 12.4269952,10.5102717 C12.3144389,10.7093711 12.3144389,10.9674037 12.4269952,11.166503 L13.0832431,12.3435994 L12.3540787,13.0727637 L11.1665825,12.4165325 C10.9657097,12.3070995 10.7076406,12.3112328 10.5103345,12.4268658 C10.147179,12.6334984 9.76123685,12.7938646 9.35408812,12.9060309 C9.13711213,12.9678974 8.95762936,13.1473635 8.89575622,13.3643628 L8.52075739,14.6664254 L7.47909398,14.6664254 L7.10409515,13.3643628 C7.04222201,13.1473635 6.86273923,12.9678974 6.64576324,12.9060309 C6.23861452,12.7938646 5.85267572,12.6334984 5.48951686,12.4268658 C5.29221081,12.3111328 5.03414161,12.3070328 4.83326891,12.4165325 L3.64577262,13.0727637 L2.91660823,12.3435994 L3.57285618,11.1665364 C3.68541249,10.967437 3.68541249,10.7093711 3.57285618,10.5102717 C3.36622682,10.1471062 3.19545069,9.76124075 3.08327437,9.35404202 C3.02450122,9.13327605 2.84433179,8.94900996 2.62494247,8.88527682 L1.33327984,8.52071129 L1.33327984,7.47904788 L2.62494247,7.10404905 C2.84433179,7.04031592 3.02450122,6.85604983 3.08327437,6.63528385 C3.19545736,6.22808512 3.36628349,5.842053 3.57285618,5.47905413 C3.68169917,5.28242141 3.68169917,5.0298222 3.57285618,4.83322281 L2.91660823,3.64572652 L3.65618925,2.91656213 L4.83326891,3.57279342 C5.03414161,3.68222641 5.29221081,3.67812642 5.48951686,3.56246012 C5.85264239,3.35582743 6.23853785,3.19552793 6.64576324,3.08329495 C6.86273923,3.02142847 7.04222201,2.84196237 7.10409515,2.62496304 L7.47909398,1.33326708 L7.47909398,1.33326708 Z M7.99992568,4.99995563 C6.35097083,4.99995563 4.99993505,6.35098474 4.99993505,7.99994625 C4.99993505,9.64887444 6.35097083,10.9999369 7.99992568,10.9999369 C9.64888053,10.9999369 10.9999163,9.64887444 10.9999163,7.99994625 C10.9999163,6.35098474 9.64888053,4.99995563 7.99992568,4.99995563 L7.99992568,4.99995563 Z M7.99992568,6.33328479 C8.92828945,6.33328479 9.66658714,7.07158249 9.66658714,7.99994625 C9.66658714,8.92831002 8.92828945,9.66660771 7.99992568,9.66660771 C7.07156191,9.66660771 6.33326422,8.92831002 6.33326422,7.99994625 C6.33326422,7.07158249 7.07156191,6.33328479 7.99992568,6.33328479 L7.99992568,6.33328479 Z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

SettingsIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.object
}

export default SettingsIcon
