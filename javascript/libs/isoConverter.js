var iso2to3 = {'AF' : 'AFG','AX' : 'ALA','AL' : 'ALB','DZ' : 'DZA','AS' : 'ASM','AD' : 'AND','AO' : 'AGO','AI' : 'AIA','AQ' : 'ATA','AG' : 'ATG','AR' : 'ARG','AM' : 'ARM','AW' : 'ABW','AU' : 'AUS','AT' : 'AUT','AZ' : 'AZE','BS' : 'BHS','BH' : 'BHR','BD' : 'BGD','BB' : 'BRB','BY' : 'BLR','BE' : 'BEL','BZ' : 'BLZ','BJ' : 'BEN','BM' : 'BMU','BT' : 'BTN','BO' : 'BOL','BA' : 'BIH','BW' : 'BWA','BV' : 'BVT','BR' : 'BRA','IO' : 'IOT','BN' : 'BRN','BG' : 'BGR','BF' : 'BFA','BI' : 'BDI','KH' : 'KHM','CM' : 'CMR','CA' : 'CAN','CV' : 'CPV','KY' : 'CYM','CF' : 'CAF','TD' : 'TCD','CL' : 'CHL','CN' : 'CHN','CX' : 'CXR','CC' : 'CCK','CO' : 'COL','KM' : 'COM','CG' : 'COG','CD' : 'COD','CK' : 'COK','CR' : 'CRI','CI' : 'CIV','HR' : 'HRV','CU' : 'CUB','CY' : 'CYP','CZ' : 'CZE','DK' : 'DNK','DJ' : 'DJI','DM' : 'DMA','DO' : 'DOM','EC' : 'ECU','EG' : 'EGY','SV' : 'SLV','GQ' : 'GNQ','ER' : 'ERI','EE' : 'EST','ET' : 'ETH','FK' : 'FLK','FO' : 'FRO','FJ' : 'FJI','FI' : 'FIN','FR' : 'FRA','GF' : 'GUF','PF' : 'PYF','TF' : 'ATF','GA' : 'GAB','GM' : 'GMB','GE' : 'GEO','DE' : 'DEU','GH' : 'GHA','GI' : 'GIB','GR' : 'GRC','GL' : 'GRL','GD' : 'GRD','GP' : 'GLP','GU' : 'GUM','GT' : 'GTM','GG' : 'GGY','GN' : 'GIN','GW' : 'GNB','GY' : 'GUY','HT' : 'HTI','HM' : 'HMD','VA' : 'VAT','HN' : 'HND','HK' : 'HKG','HU' : 'HUN','IS' : 'ISL','IN' : 'IND','ID' : 'IDN','IR' : 'IRN','IQ' : 'IRQ','IE' : 'IRL','IM' : 'IMN','IL' : 'ISR','IT' : 'ITA','JM' : 'JAM','JP' : 'JPN','JE' : 'JEY','JO' : 'JOR','KZ' : 'KAZ','KE' : 'KEN','KI' : 'KIR','KP' : 'PRK','KR' : 'KOR','KW' : 'KWT','KG' : 'KGZ','LA' : 'LAO','LV' : 'LVA','LB' : 'LBN','LS' : 'LSO','LR' : 'LBR','LY' : 'LBY','LI' : 'LIE','LT' : 'LTU','LU' : 'LUX','MO' : 'MAC','MK' : 'MKD','MG' : 'MDG','MW' : 'MWI','MY' : 'MYS','MV' : 'MDV','ML' : 'MLI','MT' : 'MLT','MH' : 'MHL','MQ' : 'MTQ','MR' : 'MRT','MU' : 'MUS','YT' : 'MYT','MX' : 'MEX','FM' : 'FSM','MD' : 'MDA','MC' : 'MCO','MN' : 'MNG','ME' : 'MNE','MS' : 'MSR','MA' : 'MAR','MZ' : 'MOZ','MM' : 'MMR','nan' : 'NAM','NR' : 'NRU','NP' : 'NPL','NL' : 'NLD','AN' : 'ANT','NC' : 'NCL','NZ' : 'NZL','NI' : 'NIC','NE' : 'NER','NG' : 'NGA','NU' : 'NIU','NF' : 'NFK','MP' : 'MNP','NO' : 'NOR','OM' : 'OMN','PK' : 'PAK','PW' : 'PLW','PS' : 'PSE','PA' : 'PAN','PG' : 'PNG','PY' : 'PRY','PE' : 'PER','PH' : 'PHL','PN' : 'PCN','PL' : 'POL','PT' : 'PRT','PR' : 'PRI','QA' : 'QAT','RE' : 'REU','RO' : 'ROU','RU' : 'RUS','RW' : 'RWA','BL' : 'BLM','SH' : 'SHN','KN' : 'KNA','LC' : 'LCA','MF' : 'MAF','PM' : 'SPM','VC' : 'VCT','WS' : 'WSM','SM' : 'SMR','ST' : 'STP','SA' : 'SAU','SN' : 'SEN','RS' : 'SRB','SC' : 'SYC','SL' : 'SLE','SG' : 'SGP','SK' : 'SVK','SI' : 'SVN','SB' : 'SLB','SO' : 'SOM','ZA' : 'ZAF','GS' : 'SGS','ES' : 'ESP','LK' : 'LKA','SD' : 'SDN','SR' : 'SUR','SJ' : 'SJM','SZ' : 'SWZ','SE' : 'SWE','CH' : 'CHE','SY' : 'SYR','TW' : 'TWN','TJ' : 'TJK','TZ' : 'TZA','TH' : 'THA','TL' : 'TLS','TG' : 'TGO','TK' : 'TKL','TO' : 'TON','TT' : 'TTO','TN' : 'TUN','TR' : 'TUR','TM' : 'TKM','TC' : 'TCA','TV' : 'TUV','UG' : 'UGA','UA' : 'UKR','AE' : 'ARE','GB' : 'GBR','US' : 'USA','UM' : 'UMI','UY' : 'URY','UZ' : 'UZB','VU' : 'VUT','VE' : 'VEN','VN' : 'VNM','VG' : 'VGB','VI' : 'VIR','WF' : 'WLF','EH' : 'ESH','YE' : 'YEM','ZM' : 'ZMB','ZW' : 'ZWE',};
var iso3to2 = {'AFG' : 'AF','ALA' : 'AX','ALB' : 'AL','DZA' : 'DZ','ASM' : 'AS','AND' : 'AD','AGO' : 'AO','AIA' : 'AI','ATA' : 'AQ','ATG' : 'AG','ARG' : 'AR','ARM' : 'AM','ABW' : 'AW','AUS' : 'AU','AUT' : 'AT','AZE' : 'AZ','BHS' : 'BS','BHR' : 'BH','BGD' : 'BD','BRB' : 'BB','BLR' : 'BY','BEL' : 'BE','BLZ' : 'BZ','BEN' : 'BJ','BMU' : 'BM','BTN' : 'BT','BOL' : 'BO','BIH' : 'BA','BWA' : 'BW','BVT' : 'BV','BRA' : 'BR','IOT' : 'IO','BRN' : 'BN','BGR' : 'BG','BFA' : 'BF','BDI' : 'BI','KHM' : 'KH','CMR' : 'CM','CAN' : 'CA','CPV' : 'CV','CYM' : 'KY','CAF' : 'CF','TCD' : 'TD','CHL' : 'CL','CHN' : 'CN','CXR' : 'CX','CCK' : 'CC','COL' : 'CO','COM' : 'KM','COG' : 'CG','COD' : 'CD','COK' : 'CK','CRI' : 'CR','CIV' : 'CI','HRV' : 'HR','CUB' : 'CU','CYP' : 'CY','CZE' : 'CZ','DNK' : 'DK','DJI' : 'DJ','DMA' : 'DM','DOM' : 'DO','ECU' : 'EC','EGY' : 'EG','SLV' : 'SV','GNQ' : 'GQ','ERI' : 'ER','EST' : 'EE','ETH' : 'ET','FLK' : 'FK','FRO' : 'FO','FJI' : 'FJ','FIN' : 'FI','FRA' : 'FR','GUF' : 'GF','PYF' : 'PF','ATF' : 'TF','GAB' : 'GA','GMB' : 'GM','GEO' : 'GE','DEU' : 'DE','GHA' : 'GH','GIB' : 'GI','GRC' : 'GR','GRL' : 'GL','GRD' : 'GD','GLP' : 'GP','GUM' : 'GU','GTM' : 'GT','GGY' : 'GG','GIN' : 'GN','GNB' : 'GW','GUY' : 'GY','HTI' : 'HT','HMD' : 'HM','VAT' : 'VA','HND' : 'HN','HKG' : 'HK','HUN' : 'HU','ISL' : 'IS','IND' : 'IN','IDN' : 'ID','IRN' : 'IR','IRQ' : 'IQ','IRL' : 'IE','IMN' : 'IM','ISR' : 'IL','ITA' : 'IT','JAM' : 'JM','JPN' : 'JP','JEY' : 'JE','JOR' : 'JO','KAZ' : 'KZ','KEN' : 'KE','KIR' : 'KI','PRK' : 'KP','KOR' : 'KR','KWT' : 'KW','KGZ' : 'KG','LAO' : 'LA','LVA' : 'LV','LBN' : 'LB','LSO' : 'LS','LBR' : 'LR','LBY' : 'LY','LIE' : 'LI','LTU' : 'LT','LUX' : 'LU','MAC' : 'MO','MKD' : 'MK','MDG' : 'MG','MWI' : 'MW','MYS' : 'MY','MDV' : 'MV','MLI' : 'ML','MLT' : 'MT','MHL' : 'MH','MTQ' : 'MQ','MRT' : 'MR','MUS' : 'MU','MYT' : 'YT','MEX' : 'MX','FSM' : 'FM','MDA' : 'MD','MCO' : 'MC','MNG' : 'MN','MNE' : 'ME','MSR' : 'MS','MAR' : 'MA','MOZ' : 'MZ','MMR' : 'MM','NAM' : 'nan','NRU' : 'NR','NPL' : 'NP','NLD' : 'NL','ANT' : 'AN','NCL' : 'NC','NZL' : 'NZ','NIC' : 'NI','NER' : 'NE','NGA' : 'NG','NIU' : 'NU','NFK' : 'NF','MNP' : 'MP','NOR' : 'NO','OMN' : 'OM','PAK' : 'PK','PLW' : 'PW','PSE' : 'PS','PAN' : 'PA','PNG' : 'PG','PRY' : 'PY','PER' : 'PE','PHL' : 'PH','PCN' : 'PN','POL' : 'PL','PRT' : 'PT','PRI' : 'PR','QAT' : 'QA','REU' : 'RE','ROU' : 'RO','RUS' : 'RU','RWA' : 'RW','BLM' : 'BL','SHN' : 'SH','KNA' : 'KN','LCA' : 'LC','MAF' : 'MF','SPM' : 'PM','VCT' : 'VC','WSM' : 'WS','SMR' : 'SM','STP' : 'ST','SAU' : 'SA','SEN' : 'SN','SRB' : 'RS','SYC' : 'SC','SLE' : 'SL','SGP' : 'SG','SVK' : 'SK','SVN' : 'SI','SLB' : 'SB','SOM' : 'SO','ZAF' : 'ZA','SGS' : 'GS','ESP' : 'ES','LKA' : 'LK','SDN' : 'SD','SUR' : 'SR','SJM' : 'SJ','SWZ' : 'SZ','SWE' : 'SE','CHE' : 'CH','SYR' : 'SY','TWN' : 'TW','TJK' : 'TJ','TZA' : 'TZ','THA' : 'TH','TLS' : 'TL','TGO' : 'TG','TKL' : 'TK','TON' : 'TO','TTO' : 'TT','TUN' : 'TN','TUR' : 'TR','TKM' : 'TM','TCA' : 'TC','TUV' : 'TV','UGA' : 'UG','UKR' : 'UA','ARE' : 'AE','GBR' : 'GB','USA' : 'US','UMI' : 'UM','URY' : 'UY','UZB' : 'UZ','VUT' : 'VU','VEN' : 'VE','VNM' : 'VN','VGB' : 'VG','VIR' : 'VI','WLF' : 'WF','ESH' : 'EH','YEM' : 'YE','ZMB' : 'ZM','ZWE' : 'ZW',};
var iso2toName = {'AF' : "Afghanistan",'AX' : "Aland Islands",'AL' : "Albania",'DZ' : "Algeria",'AS' : "American Samoa",'AD' : "Andorra",'AO' : "Angola",'AI' : "Anguilla",'AQ' : "Antarctica",'AG' : "Antigua and Barbuda",'AR' : "Argentina",'AM' : "Armenia",'AW' : "Aruba",'AU' : "Australia",'AT' : "Austria",'AZ' : "Azerbaijan",'BS' : "Bahamas",'BH' : "Bahrain",'BD' : "Bangladesh",'BB' : "Barbados",'BY' : "Belarus",'BE' : "Belgium",'BZ' : "Belize",'BJ' : "Benin",'BM' : "Bermuda",'BT' : "Bhutan",'BO' : "Bolivia, Plurinational State of",'BA' : "Bosnia and Herzegovina",'BW' : "Botswana",'BV' : "Bouvet Island",'BR' : "Brazil",'IO' : "British Indian Ocean Territory",'BN' : "Brunei Darussalam",'BG' : "Bulgaria",'BF' : "Burkina Faso",'BI' : "Burundi",'KH' : "Cambodia",'CM' : "Cameroon",'CA' : "Canada",'CV' : "Cape Verde",'KY' : "Cayman Islands",'CF' : "Central African Republic",'TD' : "Chad",'CL' : "Chile",'CN' : "China",'CX' : "Christmas Island",'CC' : "Cocos (Keeling) Islands",'CO' : "Colombia",'KM' : "Comoros",'CG' : "Congo",'CD' : "Congo, the Democratic Republic of the",'CK' : "Cook Islands",'CR' : "Costa Rica",'CI' : "C�te d'Ivoire",'HR' : "Croatia",'CU' : "Cuba",'CY' : "Cyprus",'CZ' : "Czech Republic",'DK' : "Denmark",'DJ' : "Djibouti",'DM' : "Dominica",'DO' : "Dominican Republic",'EC' : "Ecuador",'EG' : "Egypt",'SV' : "El Salvador",'GQ' : "Equatorial Guinea",'ER' : "Eritrea",'EE' : "Estonia",'ET' : "Ethiopia",'FK' : "Falkland Islands (Malvinas)",'FO' : "Faroe Islands",'FJ' : "Fiji",'FI' : "Finland",'FR' : "France",'GF' : "French Guiana",'PF' : "French Polynesia",'TF' : "French Southern Territories",'GA' : "Gabon",'GM' : "Gambia",'GE' : "Georgia",'DE' : "Germany",'GH' : "Ghana",'GI' : "Gibraltar",'GR' : "Greece",'GL' : "Greenland",'GD' : "Grenada",'GP' : "Guadeloupe",'GU' : "Guam",'GT' : "Guatemala",'GG' : "Guernsey",'GN' : "Guinea",'GW' : "Guinea-Bissau",'GY' : "Guyana",'HT' : "Haiti",'HM' : "Heard Island and McDonald Islands",'VA' : "Holy See (Vatican City State)",'HN' : "Honduras",'HK' : "Hong Kong",'HU' : "Hungary",'IS' : "Iceland",'IN' : "India",'ID' : "Indonesia",'IR' : "Iran, Islamic Republic of",'IQ' : "Iraq",'IE' : "Ireland",'IM' : "Isle of Man",'IL' : "Israel",'IT' : "Italy",'JM' : "Jamaica",'JP' : "Japan",'JE' : "Jersey",'JO' : "Jordan",'KZ' : "Kazakhstan",'KE' : "Kenya",'KI' : "Kiribati",'KP' : "Korea, Democratic People's Republic of",'KR' : "Korea, Republic of",'KW' : "Kuwait",'KG' : "Kyrgyzstan",'LA' : "Lao People's Democratic Republic",'LV' : "Latvia",'LB' : "Lebanon",'LS' : "Lesotho",'LR' : "Liberia",'LY' : "Libyan Arab Jamahiriya",'LI' : "Liechtenstein",'LT' : "Lithuania",'LU' : "Luxembourg",'MO' : "Macao",'MK' : "Macedonia, the former Yugoslav Republic of",'MG' : "Madagascar",'MW' : "Malawi",'MY' : "Malaysia",'MV' : "Maldives",'ML' : "Mali",'MT' : "Malta",'MH' : "Marshall Islands",'MQ' : "Martinique",'MR' : "Mauritania",'MU' : "Mauritius",'YT' : "Mayotte",'MX' : "Mexico",'FM' : "Micronesia, Federated States of",'MD' : "Moldova, Republic of",'MC' : "Monaco",'MN' : "Mongolia",'ME' : "Montenegro",'MS' : "Montserrat",'MA' : "Morocco",'MZ' : "Mozambique",'MM' : "Myanmar",'nan' : "Namibia",'NR' : "Nauru",'NP' : "Nepal",'NL' : "Netherlands",'AN' : "Netherlands Antilles",'NC' : "New Caledonia",'NZ' : "New Zealand",'NI' : "Nicaragua",'NE' : "Niger",'NG' : "Nigeria",'NU' : "Niue",'NF' : "Norfolk Island",'MP' : "Northern Mariana Islands",'NO' : "Norway",'OM' : "Oman",'PK' : "Pakistan",'PW' : "Palau",'PS' : "Palestinian Territory, Occupied",'PA' : "Panama",'PG' : "Papua New Guinea",'PY' : "Paraguay",'PE' : "Peru",'PH' : "Philippines",'PN' : "Pitcairn",'PL' : "Poland",'PT' : "Portugal",'PR' : "Puerto Rico",'QA' : "Qatar",'RE' : "R�union",'RO' : "Romania",'RU' : "Russian Federation",'RW' : "Rwanda",'BL' : "Saint Barth�lemy",'SH' : "Saint Helena, Ascension and Tristan da Cunha",'KN' : "Saint Kitts and Nevis",'LC' : "Saint Lucia",'MF' : "Saint Martin (French part)",'PM' : "Saint Pierre and Miquelon",'VC' : "Saint Vincent and the Grenadines",'WS' : "Samoa",'SM' : "San Marino",'ST' : "Sao Tome and Principe",'SA' : "Saudi Arabia",'SN' : "Senegal",'RS' : "Serbia",'SC' : "Seychelles",'SL' : "Sierra Leone",'SG' : "Singapore",'SK' : "Slovakia",'SI' : "Slovenia",'SB' : "Solomon Islands",'SO' : "Somalia",'ZA' : "South Africa",'GS' : "South Georgia and the South Sandwich Islands",'ES' : "Spain",'LK' : "Sri Lanka",'SD' : "Sudan",'SR' : "Suriname",'SJ' : "Svalbard and Jan Mayen",'SZ' : "Swaziland",'SE' : "Sweden",'CH' : "Switzerland",'SY' : "Syrian Arab Republic",'TW' : "Taiwan, Province of China",'TJ' : "Tajikistan",'TZ' : "Tanzania, United Republic of",'TH' : "Thailand",'TL' : "Timor-Leste",'TG' : "Togo",'TK' : "Tokelau",'TO' : "Tonga",'TT' : "Trinidad and Tobago",'TN' : "Tunisia",'TR' : "Turkey",'TM' : "Turkmenistan",'TC' : "Turks and Caicos Islands",'TV' : "Tuvalu",'UG' : "Uganda",'UA' : "Ukraine",'AE' : "United Arab Emirates",'GB' : "United Kingdom",'US' : "United States",'UM' : "United States Minor Outlying Islands",'UY' : "Uruguay",'UZ' : "Uzbekistan",'VU' : "Vanuatu",'VE' : "Venezuela, Bolivarian Republic of",'VN' : "Viet Nam",'VG' : "Virgin Islands, British",'VI' : "Virgin Islands, U.S.",'WF' : "Wallis and Futuna",'EH' : "Western Sahara",'YE' : "Yemen",'ZM' : "Zambia",'ZW' : "Zimbabwe",};
var nameToIso2 = {"Afghanistan" : "AF","Aland Islands" : "AX","Albania" : "AL","Algeria" : "DZ","American Samoa" : "AS","Andorra" : "AD","Angola" : "AO","Anguilla" : "AI","Antarctica" : "AQ","Antigua and Barbuda" : "AG","Argentina" : "AR","Armenia" : "AM","Aruba" : "AW","Australia" : "AU","Austria" : "AT","Azerbaijan" : "AZ","Bahamas" : "BS","Bahrain" : "BH","Bangladesh" : "BD","Barbados" : "BB","Belarus" : "BY","Belgium" : "BE","Belize" : "BZ","Benin" : "BJ","Bermuda" : "BM","Bhutan" : "BT","Bolivia, Plurinational State of" : "BO","Bosnia and Herzegovina" : "BA","Botswana" : "BW","Bouvet Island" : "BV","Brazil" : "BR","British Indian Ocean Territory" : "IO","Brunei Darussalam" : "BN","Bulgaria" : "BG","Burkina Faso" : "BF","Burundi" : "BI","Cambodia" : "KH","Cameroon" : "CM","Canada" : "CA","Cape Verde" : "CV","Cayman Islands" : "KY","Central African Republic" : "CF","Chad" : "TD","Chile" : "CL","China" : "CN","Christmas Island" : "CX","Cocos (Keeling) Islands" : "CC","Colombia" : "CO","Comoros" : "KM","Congo" : "CG","Congo, the Democratic Republic of the" : "CD","Cook Islands" : "CK","Costa Rica" : "CR","C�te d'Ivoire" : "CI","Croatia" : "HR","Cuba" : "CU","Cyprus" : "CY","Czech Republic" : "CZ","Denmark" : "DK","Djibouti" : "DJ","Dominica" : "DM","Dominican Republic" : "DO","Ecuador" : "EC","Egypt" : "EG","El Salvador" : "SV","Equatorial Guinea" : "GQ","Eritrea" : "ER","Estonia" : "EE","Ethiopia" : "ET","Falkland Islands (Malvinas)" : "FK","Faroe Islands" : "FO","Fiji" : "FJ","Finland" : "FI","France" : "FR","French Guiana" : "GF","French Polynesia" : "PF","French Southern Territories" : "TF","Gabon" : "GA","Gambia" : "GM","Georgia" : "GE","Germany" : "DE","Ghana" : "GH","Gibraltar" : "GI","Greece" : "GR","Greenland" : "GL","Grenada" : "GD","Guadeloupe" : "GP","Guam" : "GU","Guatemala" : "GT","Guernsey" : "GG","Guinea" : "GN","Guinea-Bissau" : "GW","Guyana" : "GY","Haiti" : "HT","Heard Island and McDonald Islands" : "HM","Holy See (Vatican City State)" : "VA","Honduras" : "HN","Hong Kong" : "HK","Hungary" : "HU","Iceland" : "IS","India" : "IN","Indonesia" : "ID","Iran, Islamic Republic of" : "IR","Iraq" : "IQ","Ireland" : "IE","Isle of Man" : "IM","Israel" : "IL","Italy" : "IT","Jamaica" : "JM","Japan" : "JP","Jersey" : "JE","Jordan" : "JO","Kazakhstan" : "KZ","Kenya" : "KE","Kiribati" : "KI","Korea, Democratic People's Republic of" : "KP","Korea, Republic of" : "KR","Kuwait" : "KW","Kyrgyzstan" : "KG","Lao People's Democratic Republic" : "LA","Latvia" : "LV","Lebanon" : "LB","Lesotho" : "LS","Liberia" : "LR","Libyan Arab Jamahiriya" : "LY","Liechtenstein" : "LI","Lithuania" : "LT","Luxembourg" : "LU","Macao" : "MO","Macedonia, the former Yugoslav Republic of" : "MK","Madagascar" : "MG","Malawi" : "MW","Malaysia" : "MY","Maldives" : "MV","Mali" : "ML","Malta" : "MT","Marshall Islands" : "MH","Martinique" : "MQ","Mauritania" : "MR","Mauritius" : "MU","Mayotte" : "YT","Mexico" : "MX","Micronesia, Federated States of" : "FM","Moldova, Republic of" : "MD","Monaco" : "MC","Mongolia" : "MN","Montenegro" : "ME","Montserrat" : "MS","Morocco" : "MA","Mozambique" : "MZ","Myanmar" : "MM","Namibia" : "nan","Nauru" : "NR","Nepal" : "NP","Netherlands" : "NL","Netherlands Antilles" : "AN","New Caledonia" : "NC","New Zealand" : "NZ","Nicaragua" : "NI","Niger" : "NE","Nigeria" : "NG","Niue" : "NU","Norfolk Island" : "NF","Northern Mariana Islands" : "MP","Norway" : "NO","Oman" : "OM","Pakistan" : "PK","Palau" : "PW","Palestinian Territory, Occupied" : "PS","Panama" : "PA","Papua New Guinea" : "PG","Paraguay" : "PY","Peru" : "PE","Philippines" : "PH","Pitcairn" : "PN","Poland" : "PL","Portugal" : "PT","Puerto Rico" : "PR","Qatar" : "QA","R�union" : "RE","Romania" : "RO","Russian Federation" : "RU","Rwanda" : "RW","Saint Barth�lemy" : "BL","Saint Helena, Ascension and Tristan da Cunha" : "SH","Saint Kitts and Nevis" : "KN","Saint Lucia" : "LC","Saint Martin (French part)" : "MF","Saint Pierre and Miquelon" : "PM","Saint Vincent and the Grenadines" : "VC","Samoa" : "WS","San Marino" : "SM","Sao Tome and Principe" : "ST","Saudi Arabia" : "SA","Senegal" : "SN","Serbia" : "RS","Seychelles" : "SC","Sierra Leone" : "SL","Singapore" : "SG","Slovakia" : "SK","Slovenia" : "SI","Solomon Islands" : "SB","Somalia" : "SO","South Africa" : "ZA","South Georgia and the South Sandwich Islands" : "GS","Spain" : "ES","Sri Lanka" : "LK","Sudan" : "SD","Suriname" : "SR","Svalbard and Jan Mayen" : "SJ","Swaziland" : "SZ","Sweden" : "SE","Switzerland" : "CH","Syrian Arab Republic" : "SY","Taiwan, Province of China" : "TW","Tajikistan" : "TJ","Tanzania, United Republic of" : "TZ","Thailand" : "TH","Timor-Leste" : "TL","Togo" : "TG","Tokelau" : "TK","Tonga" : "TO","Trinidad and Tobago" : "TT","Tunisia" : "TN","Turkey" : "TR","Turkmenistan" : "TM","Turks and Caicos Islands" : "TC","Tuvalu" : "TV","Uganda" : "UG","Ukraine" : "UA","United Arab Emirates" : "AE","United Kingdom" : "GB","United States" : "US","United States Minor Outlying Islands" : "UM","Uruguay" : "UY","Uzbekistan" : "UZ","Vanuatu" : "VU","Venezuela, Bolivarian Republic of" : "VE","Viet Nam" : "VN","Virgin Islands, British" : "VG","Virgin Islands, U.S." : "VI","Wallis and Futuna" : "WF","Western Sahara" : "EH","Yemen" : "YE","Zambia" : "ZM","Zimbabwe" : "ZW",};

function convertIso3ToIso2(iso3)
{
    return iso3to2[iso3];
}

function convertIso2ToIso3(iso2)
{
    return iso2to3[iso2];
}

function convertIso2ToName(iso2)
{
    return iso2toName[iso2];
}

function convertNameToIso2(name)
{
    return nameToIso2[name];
}
