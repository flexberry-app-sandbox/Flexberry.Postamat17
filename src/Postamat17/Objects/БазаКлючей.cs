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
    /// База ключей.
    /// </summary>
    // *** Start programmer edit section *** (БазаКлючей CustomAttributes)

    // *** End programmer edit section *** (БазаКлючей CustomAttributes)
    [AutoAltered()]
    [Caption("База ключей")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БазаКлючейE", new string[] {
            "НомерБазы as \'Номер базы\'"})]
    [AssociatedDetailViewAttribute("БазаКлючейE", "Ключ", "КлючE", true, "", "Ключ", true, new string[] {
            ""})]
    [View("БазаКлючейL", new string[] {
            "НомерБазы as \'Номер базы\'"})]
    public class БазаКлючей : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерБазы;
        
        private IIS.Postamat17.DetailArrayOfКлюч fКлюч;
        
        // *** Start programmer edit section *** (БазаКлючей CustomMembers)

        // *** End programmer edit section *** (БазаКлючей CustomMembers)

        
        /// <summary>
        /// НомерБазы.
        /// </summary>
        // *** Start programmer edit section *** (БазаКлючей.НомерБазы CustomAttributes)

        // *** End programmer edit section *** (БазаКлючей.НомерБазы CustomAttributes)
        public virtual int НомерБазы
        {
            get
            {
                // *** Start programmer edit section *** (БазаКлючей.НомерБазы Get start)

                // *** End programmer edit section *** (БазаКлючей.НомерБазы Get start)
                int result = this.fНомерБазы;
                // *** Start programmer edit section *** (БазаКлючей.НомерБазы Get end)

                // *** End programmer edit section *** (БазаКлючей.НомерБазы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаКлючей.НомерБазы Set start)

                // *** End programmer edit section *** (БазаКлючей.НомерБазы Set start)
                this.fНомерБазы = value;
                // *** Start programmer edit section *** (БазаКлючей.НомерБазы Set end)

                // *** End programmer edit section *** (БазаКлючей.НомерБазы Set end)
            }
        }
        
        /// <summary>
        /// База ключей.
        /// </summary>
        // *** Start programmer edit section *** (БазаКлючей.Ключ CustomAttributes)

        // *** End programmer edit section *** (БазаКлючей.Ключ CustomAttributes)
        public virtual IIS.Postamat17.DetailArrayOfКлюч Ключ
        {
            get
            {
                // *** Start programmer edit section *** (БазаКлючей.Ключ Get start)

                // *** End programmer edit section *** (БазаКлючей.Ключ Get start)
                if ((this.fКлюч == null))
                {
                    this.fКлюч = new IIS.Postamat17.DetailArrayOfКлюч(this);
                }
                IIS.Postamat17.DetailArrayOfКлюч result = this.fКлюч;
                // *** Start programmer edit section *** (БазаКлючей.Ключ Get end)

                // *** End programmer edit section *** (БазаКлючей.Ключ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаКлючей.Ключ Set start)

                // *** End programmer edit section *** (БазаКлючей.Ключ Set start)
                this.fКлюч = value;
                // *** Start programmer edit section *** (БазаКлючей.Ключ Set end)

                // *** End programmer edit section *** (БазаКлючей.Ключ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БазаКлючейE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БазаКлючейE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БазаКлючейE", typeof(IIS.Postamat17.БазаКлючей));
                }
            }
            
            /// <summary>
            /// "БазаКлючейL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БазаКлючейL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БазаКлючейL", typeof(IIS.Postamat17.БазаКлючей));
                }
            }
        }
    }
}
