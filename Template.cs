using CalcoloVD;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
//EID = Event In Designer
namespace CalcoloVelocitaDownload
{
    public partial class GUIForm : Form
    {
        public GUIForm()
        {
            InitializeComponent();
            textBox1.TextChanged += TextBoxNotNumber;
            textBox2.TextChanged += TextBoxNotNumber;
            ResetData();
        }

        private void ResetData()
        {
            comboBox1.SelectedIndex = 2; comboBox2.SelectedIndex = 5;
            textBox1.Clear(); textBox2.Clear(); textBox3.Clear();
        }

        private void Button1_Click(object sender, EventArgs e) //EID
        {
            if (textBox1.Text == "" || textBox2.Text == "" || textBox1.Text == "." || textBox2.Text == "." || textBox1.Text == "," || textBox2.Text == ",") { return; } // | e || sono rispettivamente or e orElse, nel caso in cui il primo sia vero allora con ||(orElse) il secondo non verrà neanche valutato. analogamente questo vale anche per & e && (and e ?andElse?)
            decimal QuantitaDatiDaScaricare = decimal.Parse(textBox1.Text.Replace(".",",")); //cambiare il punto in virgola serve al programma per far in modo che prenda il valore come decimal
            decimal VelocitaDwl = decimal.Parse(textBox2.Text.Replace(".",","));

            if ((QuantitaDatiDaScaricare <= 0) || (VelocitaDwl <= 0)) { return; }

            //0 TebiByte, 1 TeraByte, 2 GibiByte, 3 GigaByte, 4 MebiByte, 5 MegaByte
            int Dtindex = comboBox1.SelectedIndex;
            if (Dtindex == 0) { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(2, 40)); } else if (Dtindex == 1) { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(10, 12)); } else if (Dtindex == 2) { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(2, 30)); } else if (Dtindex == 3) { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(10, 9)); } else if (Dtindex == 4) { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(2, 20)); } else { QuantitaDatiDaScaricare *= Convert.ToUInt64(Math.Pow(10, 6)); }

            //0 GibiByte, 1 GigaByte, 2 Gigabit, 3 MebiByte, 4 MegaByte, 5 Megabit, 6 KibiByte, 7 KiloByte, 8 Kilobit
            int Dlindex = comboBox2.SelectedIndex;
            if (Dlindex == 0) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(2, 30)); } else if (Dlindex == 1) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(10, 9)); } else if (Dlindex == 2) { VelocitaDwl *= 134217728; } else if (Dlindex == 3) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(2, 20)); } else if (Dlindex == 4) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(10, 6)); } else if (Dlindex == 5) { VelocitaDwl *= 131072; } else if (Dlindex == 6) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(2, 10)); } else if (Dlindex == 7) { VelocitaDwl *= Convert.ToUInt64(Math.Pow(10, 3)); } else { VelocitaDwl *= 128; }
            decimal tempo = QuantitaDatiDaScaricare / VelocitaDwl;
            textBox3.Text = ElaboraTempo(tempo);
        }

        private void TextBoxNotNumber(object sender, EventArgs e)
        {
            TextBox txbx = (TextBox)sender;
            foreach (char _KeyChar in txbx.Text)
            {
                if (_KeyChar.ToString() != "1" && _KeyChar.ToString() != "2" && _KeyChar.ToString() != "3" && _KeyChar.ToString() != "4" && _KeyChar.ToString() != "5" && _KeyChar.ToString() != "6" && _KeyChar.ToString() != "7" && _KeyChar.ToString() != "8" && _KeyChar.ToString() != "9" && _KeyChar.ToString() != "0" && _KeyChar.ToString() != "." && _KeyChar.ToString() != ",") { txbx.Text = txbx.Text.Replace(_KeyChar.ToString(), null); }
            }
        }
        
        private static string ElaboraTempo(decimal secondi)
        {
            decimal giorni = Math.Truncate(secondi / 86400);
            int isec = (int)(secondi % 86400); 

            int ore = (isec / 3600); isec %= 3600;//explicit conversion to int

            int minuti = (isec / 60); isec =Convert.ToInt32(secondi % 86400 % 3600 % 60);
            //usato nel caso in cui il numero superi {sec}.
            //5 è quindi viene automaticamente arrotondato a {sec}++ grazie al convert.ToInt32.
            return $"{giorni} giorni {ore} ore {minuti} minuti {isec} secondi.";
        }

        private void EsciToolStripMenuItem_Click(object sender, EventArgs e) {Application.Exit();} //EID

        private void ReimpostaDatiToolStripMenuItem_Click(object sender, EventArgs e) {ResetData();} //EID

        private void InfoAppToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new InfoApp().ShowDialog(); //show modal non permette di ritornare alla finestra principale se prima non si è chiusa quella appena aperta facendo così l'utente non può creare finestre infinite.
        }

        private void LicenseToolStripMenuItem_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://raw.githubusercontent.com/zDany01/CalcoloVD/main/LICENSE");
        }
    }
}
