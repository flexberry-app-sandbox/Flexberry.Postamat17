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
    /// Ячейка.
    /// </summary>
    // *** Start programmer edit section *** (Ячейка CustomAttributes)

    // *** End programmer edit section *** (Ячейка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЯчейкаE", new string[] {
            "НомерЯчейки as \'Номер ячейки\'",
            "Статус as \'Статус\'"})]
    [View("ЯчейкаL", new string[] {
            "НомерЯчейки as \'Номер ячейки\'",
            "Статус as \'Статус\'"})]
    public class Ячейка : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЯчейки;
        
        private IIS.Postamat17.Ячейки fСтатус;
        
        // *** Start programmer edit section *** (Ячейка CustomMembers)

        // *** End programmer edit section *** (Ячейка CustomMembers)

        
        /// <summary>
        /// НомерЯчейки.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)

        // *** End programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)
        public virtual int НомерЯчейки
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get start)
                int result = this.fНомерЯчейки;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set start)
                this.fНомерЯчейки = value;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.Статус CustomAttributes)

        // *** End programmer edit section *** (Ячейка.Статус CustomAttributes)
        public virtual IIS.Postamat17.Ячейки Статус
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.Статус Get start)

                // *** End programmer edit section *** (Ячейка.Статус Get start)
                IIS.Postamat17.Ячейки result = this.fСтатус;
                // *** Start programmer edit section *** (Ячейка.Статус Get end)

                // *** End programmer edit section *** (Ячейка.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.Статус Set start)

                // *** End programmer edit section *** (Ячейка.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (Ячейка.Статус Set end)

                // *** End programmer edit section *** (Ячейка.Статус Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЯчейкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЯчейкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЯчейкаE", typeof(IIS.Postamat17.Ячейка));
                }
            }
            
            /// <summary>
            /// "ЯчейкаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЯчейкаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЯчейкаL", typeof(IIS.Postamat17.Ячейка));
                }
            }
        }
    }
}
