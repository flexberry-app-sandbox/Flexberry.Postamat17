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
    /// Местоположение.
    /// </summary>
    // *** Start programmer edit section *** (Местоположение CustomAttributes)

    // *** End programmer edit section *** (Местоположение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МестоположениеE", new string[] {
            "Номер as \'Номер\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'",
            "СлужбаДоставки as \'Служба доставки\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"}, Hidden=new string[] {
            "СлужбаДоставки.Наименвоание"})]
    [MasterViewDefineAttribute("МестоположениеE", "СлужбаДоставки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименвоание")]
    [View("МестоположениеL", new string[] {
            "Номер as \'Номер\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"})]
    public class Местоположение : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Postamat17.Состояние fСостояние;
        
        private string fИнформация;
        
        private IIS.Postamat17.СлужбаДоставки fСлужбаДоставки;
        
        // *** Start programmer edit section *** (Местоположение CustomMembers)

        // *** End programmer edit section *** (Местоположение CustomMembers)

        
        /// <summary>
        /// Информация.
        /// </summary>
        // *** Start programmer edit section *** (Местоположение.Информация CustomAttributes)

        // *** End programmer edit section *** (Местоположение.Информация CustomAttributes)
        [StrLen(255)]
        public virtual string Информация
        {
            get
            {
                // *** Start programmer edit section *** (Местоположение.Информация Get start)

                // *** End programmer edit section *** (Местоположение.Информация Get start)
                string result = this.fИнформация;
                // *** Start programmer edit section *** (Местоположение.Информация Get end)

                // *** End programmer edit section *** (Местоположение.Информация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Местоположение.Информация Set start)

                // *** End programmer edit section *** (Местоположение.Информация Set start)
                this.fИнформация = value;
                // *** Start programmer edit section *** (Местоположение.Информация Set end)

                // *** End programmer edit section *** (Местоположение.Информация Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Местоположение.Номер CustomAttributes)

        // *** End programmer edit section *** (Местоположение.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Местоположение.Номер Get start)

                // *** End programmer edit section *** (Местоположение.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Местоположение.Номер Get end)

                // *** End programmer edit section *** (Местоположение.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Местоположение.Номер Set start)

                // *** End programmer edit section *** (Местоположение.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Местоположение.Номер Set end)

                // *** End programmer edit section *** (Местоположение.Номер Set end)
            }
        }
        
        /// <summary>
        /// Состояние.
        /// </summary>
        // *** Start programmer edit section *** (Местоположение.Состояние CustomAttributes)

        // *** End programmer edit section *** (Местоположение.Состояние CustomAttributes)
        public virtual IIS.Postamat17.Состояние Состояние
        {
            get
            {
                // *** Start programmer edit section *** (Местоположение.Состояние Get start)

                // *** End programmer edit section *** (Местоположение.Состояние Get start)
                IIS.Postamat17.Состояние result = this.fСостояние;
                // *** Start programmer edit section *** (Местоположение.Состояние Get end)

                // *** End programmer edit section *** (Местоположение.Состояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Местоположение.Состояние Set start)

                // *** End programmer edit section *** (Местоположение.Состояние Set start)
                this.fСостояние = value;
                // *** Start programmer edit section *** (Местоположение.Состояние Set end)

                // *** End programmer edit section *** (Местоположение.Состояние Set end)
            }
        }
        
        /// <summary>
        /// Местоположение.
        /// </summary>
        // *** Start programmer edit section *** (Местоположение.СлужбаДоставки CustomAttributes)

        // *** End programmer edit section *** (Местоположение.СлужбаДоставки CustomAttributes)
        [PropertyStorage(new string[] {
                "СлужбаДоставки"})]
        [NotNull()]
        public virtual IIS.Postamat17.СлужбаДоставки СлужбаДоставки
        {
            get
            {
                // *** Start programmer edit section *** (Местоположение.СлужбаДоставки Get start)

                // *** End programmer edit section *** (Местоположение.СлужбаДоставки Get start)
                IIS.Postamat17.СлужбаДоставки result = this.fСлужбаДоставки;
                // *** Start programmer edit section *** (Местоположение.СлужбаДоставки Get end)

                // *** End programmer edit section *** (Местоположение.СлужбаДоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Местоположение.СлужбаДоставки Set start)

                // *** End programmer edit section *** (Местоположение.СлужбаДоставки Set start)
                this.fСлужбаДоставки = value;
                // *** Start programmer edit section *** (Местоположение.СлужбаДоставки Set end)

                // *** End programmer edit section *** (Местоположение.СлужбаДоставки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МестоположениеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоположениеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоположениеE", typeof(IIS.Postamat17.Местоположение));
                }
            }
            
            /// <summary>
            /// "МестоположениеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоположениеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоположениеL", typeof(IIS.Postamat17.Местоположение));
                }
            }
        }
    }
}
