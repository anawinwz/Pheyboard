using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Input.Preview.Injection;
using Windows.System;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace WindowsApp
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        InputInjector inputInjector = InputInjector.TryCreate();
        private readonly Stopwatch sw = new Stopwatch();

        public MainPage()
        {
            this.InitializeComponent();
            while (true) {
                var data = new InjectedInputKeyboardInfo();
                data.VirtualKey = (ushort)VirtualKey.A;
                inputInjector.InjectKeyboardInput(new[] { data });
                ShortDelay(1000);  
            }
        }

        private void ShortDelay(double milliseconds)
        {
            sw.Start();
            while ((sw.Elapsed).TotalMilliseconds < milliseconds) { }
            sw.Reset();
        }

        private void InjectKey(object sender, RoutedEventArgs e)
        {
            var data = new InjectedInputKeyboardInfo();
            data.VirtualKey = (ushort)VirtualKey.Tab;
            inputInjector.InjectKeyboardInput(new[] { data });
            ShortDelay(1000);
        }
    }


}
