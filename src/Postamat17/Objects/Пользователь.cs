﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat17
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Пользователь.
    /// </summary>
    // *** Start programmer edit section *** (Пользователь CustomAttributes)

    // *** End programmer edit section *** (Пользователь CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПользовательE", new string[] {
            "Номер as \'Номер\'",
            "ФИО as \'ФИО\'",
            "НомерТелефона as \'Номер телефона\'"})]
    [View("ПользовательL", new string[] {
            "Номер as \'Номер\'",
            "ФИО as \'ФИО\'",
            "НомерТелефона as \'Номер телефона\'"})]
    public class Пользователь : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private string fФИО;
        
        private int fНомерТелефона;
        
        // *** Start programmer edit section *** (Пользователь CustomMembers)

        // *** End programmer edit section *** (Пользователь CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Пользователь.Номер CustomAttributes)

        // *** End programmer edit section *** (Пользователь.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Пользователь.Номер Get start)

                // *** End programmer edit section *** (Пользователь.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Пользователь.Номер Get end)

                // *** End programmer edit section *** (Пользователь.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пользователь.Номер Set start)

                // *** End programmer edit section *** (Пользователь.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Пользователь.Номер Set end)

                // *** End programmer edit section *** (Пользователь.Номер Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Пользователь.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Пользователь.НомерТелефона CustomAttributes)
        public virtual int НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Пользователь.НомерТелефона Get start)

                // *** End programmer edit section *** (Пользователь.НомерТелефона Get start)
                int result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Пользователь.НомерТелефона Get end)

                // *** End programmer edit section *** (Пользователь.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пользователь.НомерТелефона Set start)

                // *** End programmer edit section *** (Пользователь.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Пользователь.НомерТелефона Set end)

                // *** End programmer edit section *** (Пользователь.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Пользователь.ФИО CustomAttributes)

        // *** End programmer edit section *** (Пользователь.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Пользователь.ФИО Get start)

                // *** End programmer edit section *** (Пользователь.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Пользователь.ФИО Get end)

                // *** End programmer edit section *** (Пользователь.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пользователь.ФИО Set start)

                // *** End programmer edit section *** (Пользователь.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Пользователь.ФИО Set end)

                // *** End programmer edit section *** (Пользователь.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПользовательE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПользовательE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПользовательE", typeof(IIS.Postamat17.Пользователь));
                }
            }
            
            /// <summary>
            /// "ПользовательL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПользовательL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПользовательL", typeof(IIS.Postamat17.Пользователь));
                }
            }
        }
    }
}
