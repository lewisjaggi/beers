import pandas as pd

df = pd.read_csv("wikipedia-iso-country-codes.csv")

output = "var dict = {"
for _,row in df.iterrows():
    output += f"'{row['Alpha-2 code']}' : '{row['Alpha-3 code']}',"

output += "};"

output += """\n
function convertIso3ToIso2(iso3)
{
    return dict[iso3];
}
"""

with open("isoConverter.js","w+") as f :
    f.write(output)